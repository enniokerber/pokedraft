import {animate, style, transition, trigger} from "@angular/animations";

export const PopUpAnimation = trigger('PopUp', [
  transition(':enter', [
    style({
      transform: 'scale(0)',
      'transform-origin': 'center',
      opacity: '.5'
    }),
    animate('300ms cubic-bezier(0,.62,.44,1.4)', style({
      transform: 'scale(1)',
      opacity: '1'
    }))
  ]),
  transition(':leave', [
    style({
      transform: 'scale(1)',
      'transform-origin': 'center',
      opacity: '1'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(0)',
      opacity: '.5'
    }))
  ])
]);
