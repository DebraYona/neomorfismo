import { FC } from 'react';
import { Button, Card, Form, Input, Typography, Slider } from 'antd';
import styled from 'styled-components';

export interface BuySellCurrencyCardFormProps {
  title?: string;
  color?: string;
  backgroundColor?: string;
  shadowColor?: [number, number, number];
}

export interface StyledSliderProps {
  color: string;
  shadowColor: [number, number, number];
}

const BuySellCurrencyCardForm: FC<BuySellCurrencyCardFormProps> = ({
  title = 'TITULO',
  color = 'green',
  backgroundColor = '#ffffff',
  shadowColor = [222, 222, 222],
}) => {
  return (
    <StyledCardContainer size="small" backgroundColor={backgroundColor}>
      <Typography.Paragraph>{title} TWC</Typography.Paragraph>
      <Typography.Paragraph>Balance</Typography.Paragraph>
      <Form layout="vertical">
        <Form.Item>
          <StyledInput placeholder="Cantidad" />
        </Form.Item>
        <Form.Item>
          <StyledInput placeholder="Mercado" />
        </Form.Item>
        <Form.Item>
          <StyledSlider
            color={color}
            shadowColor={shadowColor}
            defaultValue={50}
            tooltipPlacement="bottom"
            tooltipVisible
            tipFormatter={(value) => `${value} %`}
            marks={{ 0: '0%', 100: '100%' }}
          />
        </Form.Item>
        <Form.Item>
          <StyledInput placeholder="Total" suffix="TWC" />
        </Form.Item>
        <Form.Item>
          <ColoredButton color={color}>{title}</ColoredButton>
        </Form.Item>
      </Form>
    </StyledCardContainer>
  );
};

const StyledInput = styled(Input)`
  border-color: #ffffff;
  border-radius: 10px;
  color: #444444;
  box-shadow: 1px 1.8px 1px #c7c7c7;
`;

const StyledCardContainer = styled(Card)<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 16px;
  box-shadow: 5px 10px 5px #eeeeee;
  border: 0;
  & .ant-card-body {
    margin-bottom: -16px;
  }
  & .ant-typography {
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 0.3em;
  }
  & .ant-form-item {
    margin-bottom: 16px;
  }
`;

const StyledSlider = styled(Slider)<StyledSliderProps>`
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 48px;
  & .ant-slider-rail {
    background-color: #eeeeee;
  }
  &:hover .ant-slider-rail {
    background-color: #dddddd;
  }
  & .ant-slider-track,
  &:hover .ant-slider-track,
  & .ant-slider-dot,
  & .ant-slider-handle {
    background-color: ${({ color }) => color};
    border-color: ${({ color }) => color};
  }
  & .ant-slider-handle:focus {
    box-shadow: ${({ shadowColor }) =>
      `0 0 0 5px rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, 1)`};
  }
`;

export const ColoredButton = styled(Button)<{ color: string }>`
  padding: 8px;
  height: auto;
  &,
  &:hover {
    display: block;
    border-radius: 16px;
    background-color: ${({ color }) => color};
    border-color: ${({ color }) => color};
    color: white;
    width: 140px;
    margin: auto;
  }

  &:hover {
    opacity: 0.65;
  }
`;

export default BuySellCurrencyCardForm;
