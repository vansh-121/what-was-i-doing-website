import { useState, useEffect } from 'react';

interface MarketplaceStats {
  rating: number;
  ratingCount: number;
  installs: number;
  isLoading: boolean;
  error: string | null;
}

interface Statistic {
  statisticName: string;
  value: number;
}

const EXTENSION_ID = 'VanshSethi.what-was-i-doing';
const EXTENSION_NAME = 'what-was-i-doing';
const PUBLISHER_NAME = 'VanshSethi';

export const useMarketplaceStats = () => {
  const [stats, setStats] = useState<MarketplaceStats>({
    rating: 0,
    ratingCount: 0,
    installs: 0,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // VS Code Marketplace API endpoint
        const response = await fetch(
          'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json;api-version=3.0-preview.1',
            },
            body: JSON.stringify({
              filters: [
                {
                  criteria: [
                    { filterType: 7, value: `${PUBLISHER_NAME}.${EXTENSION_NAME}` },
                    { filterType: 8, value: 'Microsoft.VisualStudio.Code' },
                  ],
                },
              ],
              flags: 914, // Flags for getting statistics
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch marketplace data: ${response.status}`);
        }

        const data = await response.json();
        const extension = data.results?.[0]?.extensions?.[0];

        if (extension) {
          const statistics = extension.statistics || [];
          
          // Extract specific statistics
          const installStat = statistics.find((s: Statistic) => s.statisticName === 'install');
          const ratingCountStat = statistics.find((s: Statistic) => s.statisticName === 'ratingcount');
          const averageRatingStat = statistics.find((s: Statistic) => s.statisticName === 'averagerating');

          setStats({
            rating: averageRatingStat ? Math.round(averageRatingStat.value * 10) / 10 : 0,
            ratingCount: ratingCountStat ? ratingCountStat.value : 0,
            installs: installStat ? installStat.value : 0,
            isLoading: false,
            error: null,
          });
        } else {
          console.warn('Marketplace: Extension not found');
          setStats({
            rating: 0,
            ratingCount: 0,
            installs: 0,
            isLoading: false,
            error: 'Extension not found',
          });
        }
      } catch (error) {
        console.error('❌ Error fetching marketplace stats:', error);
        setStats({
          rating: 0,
          ratingCount: 0,
          installs: 0,
          isLoading: false,
          error: 'Failed to load stats',
        });
      }
    };

    fetchStats();
  }, []);

  return stats;
};
