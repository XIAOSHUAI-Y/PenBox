import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Overlay, { Popup, PlacementType } from './index';
import Button from '../Button/button';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'topLeft', 'top', 'topRight',
        'leftTop', 'left', 'leftBottom',
        'rightTop', 'right', 'rightBottom',
        'bottomLeft', 'bottom', 'bottomRight'
      ]
    }
  }
};

export default meta;

export const WithPopup: StoryObj = {
  render: () => (
    <Popup
      trigger={<Button>Click Me</Button>}
      placement="bottomLeft"
    >
      <div className="overlay-content overlay-content-small">
        Popup Content
      </div>
    </Popup>
  )
};

export const AllPlacements: StoryObj = {
  render: () => {
    const placements: PlacementType[] = [
      'topLeft', 'top', 'topRight',
      'leftTop', 'left', 'leftBottom',
      'rightTop', 'right', 'rightBottom',
      'bottomLeft', 'bottom', 'bottomRight'
    ];

    const labels: Record<PlacementType, string> = {
      topLeft: 'TL', top: 'Top', topRight: 'TR',
      leftTop: 'LT', left: 'Left', leftBottom: 'LB',
      rightTop: 'RT', right: 'Right', rightBottom: 'RB',
      bottomLeft: 'BL', bottom: 'Bottom', bottomRight: 'BR'
    };

    return (
      <div className="overlay-demo-container">
        <div className="overlay-demo-row overlay-demo-row-top">
          {['topLeft', 'top', 'topRight'].map(placement => (
            <Popup
              key={placement}
              placement={placement as PlacementType}
              trigger={<Button>{labels[placement as PlacementType]}</Button>}
            >
              <div className="overlay-content overlay-content-small">
                {placement}
              </div>
            </Popup>
          ))}
        </div>

        <div className="overlay-demo-column overlay-demo-column-left">
          {['leftTop', 'left', 'leftBottom'].map(placement => (
            <Popup
              key={placement}
              placement={placement as PlacementType}
              trigger={<Button>{labels[placement as PlacementType]}</Button>}
            >
              <div className="overlay-content overlay-content-small">
                {placement}
              </div>
            </Popup>
          ))}
        </div>

        <div className="overlay-demo-column overlay-demo-column-right">
          {['rightTop', 'right', 'rightBottom'].map(placement => (
            <Popup
              key={placement}
              placement={placement as PlacementType}
              trigger={<Button>{labels[placement as PlacementType]}</Button>}
            >
              <div className="overlay-content overlay-content-small">
                {placement}
              </div>
            </Popup>
          ))}
        </div>

        <div className="overlay-demo-row overlay-demo-row-bottom">
          {['bottomLeft', 'bottom', 'bottomRight'].map(placement => (
            <Popup
              key={placement}
              placement={placement as PlacementType}
              trigger={<Button>{labels[placement as PlacementType]}</Button>}
            >
              <div className="overlay-content overlay-content-small">
                {placement}
              </div>
            </Popup>
          ))}
        </div>
      </div>
    );
  }
};