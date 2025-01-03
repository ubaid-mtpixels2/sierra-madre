import positiveIcon from '../../assets/icons/dashboard-icons/positive-face-icon.svg';
import negativeIcon from '../../assets/icons/dashboard-icons/negative-face-icon.svg';
import { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

function CustomerHappinessRating() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ['Q1', 'Q2', 'Q3'], // Labels will be hidden
      datasets: [
        {
          label: 'Sales',
          data: [89, 50, 30],
          backgroundColor: ['#31446F', '#465E95', '#6786CC'], // Gradient-like bar background
          borderWidth: 0, // Remove borders
          barThickness: 40, // Set bar width to 40px
          maxBarThickness: 40, // Ensure the max bar width is also 40px
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
      },
      scales: {
        x: {
          display: false, // Hide x-axis labels and grid lines
          grid: {
            display: false,
          },
          barPercentage: 0.8, // Control spacing between bars (80% of the total space)
          categoryPercentage: 0.6, // Reduce the category spacing to tighten the grouping
        },
        y: {
          display: false, // Hide y-axis labels and grid lines
          grid: {
            display: false,
          },
        },
      },
      maintainAspectRatio: false, // Allow chart to fit container
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const CustomerHappinessRatingData = {
    positive: 91,
    negative: 9,
    totalRatings: 44,
    data: [89, 50, 30],
  };

  return (
    <div className="w-full h-full">
      <div className="dashboard-card-label pb-0">Customer Happiness Rating</div>
      <div className="dashboard-card-container flex w-full">
        {/* LEFT */}
        <div>
          <div>
            <div className="happineess-rating-label-bold">
              {CustomerHappinessRatingData.totalRatings} Ratings
            </div>
            <div className="happineess-rating-label">
              <img className="inline-block" src={positiveIcon} alt="" />{' '}
              {CustomerHappinessRatingData.positive}% Loved It.
            </div>
            <div className="happineess-rating-label">
              <img className="inline-block" src={negativeIcon} alt="" />{' '}
              {CustomerHappinessRatingData.negative}% It was bad.
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex gap-[30px]">
          <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHappinessRating;
