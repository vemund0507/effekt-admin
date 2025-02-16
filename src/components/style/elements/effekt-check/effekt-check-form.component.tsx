import React from 'react';
import { EffektCheckFormWrapper } from './effekt-check-form.component.style';
import { EffektCheck } from './effekt-check.component';
import { SelectAllButton } from './effekt-check.component.style';

export interface EffektCheckChoice {
  label: string;
  value: any;
  selected: boolean;
}

interface IProps {
  choices: Array<EffektCheckChoice>;
  inverted?: boolean;
  onChange(selectedValues: Array<any>): void;
}

export const EffektCheckForm: React.FunctionComponent<IProps> = ({ choices, inverted, onChange }) => {
  const isInverted: boolean = inverted ? true : false;

  let checkBoxes = choices.map((choice, index) => (
    <EffektCheck
      key={index}
      label={choice.label}
      checked={choice.selected}
      inverted={isInverted}
      onChange={(now_checked) => {
        choices[index].selected = now_checked;
        onChange(choices.filter(choice => (choice.selected)).map(choice => choice.value))
      }}
    ></EffektCheck>
  ));
  return <EffektCheckFormWrapper>
  <SelectAllButton onClick={() => {
    if (choices.filter(choice => (choice.selected)).length === choices.length){onChange(new Array<number>())}
    else{onChange(choices.map(choice => choice.value))}}} inverted={isInverted}>Select all</SelectAllButton>
  {checkBoxes}
</EffektCheckFormWrapper>;
};