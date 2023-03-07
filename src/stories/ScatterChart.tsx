import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PieChart } from '../components/PieChart/PieChart';

export default {
  title: 'Components/ScatterChart',
  component: PieChart,
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => <PieChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  height: 400,
  width: 900,
  top: 10,
  right: 50,
  bottom: 50,
  left: 50,
  colors: ['blue', 'red', 'green', 'yellow', 'orange']
};