import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const slideDuration = '500ms cubic-bezier(.17,.67,.4,1)';

const OPTIONAL_ELEMENT = { optional: true };

export const routerAnimation =
  trigger('slideInOut', [
    transition('login => *, signup => *, pickusername => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(0, -50%)',
          width: '100%'
        })
      ], OPTIONAL_ELEMENT),
      query(':enter', [
        style({
          left: '-100%',
          transform: 'translate(0, -50%)'
        })
      ], OPTIONAL_ELEMENT),
      query(':leave', [
        style({ transform: 'translate(-50%, -50%)' })
      ], OPTIONAL_ELEMENT),
      group([
        query(':leave', [
          animate(slideDuration, style({
            left: '100%',
            transform: 'translate(0, -50%) scale(.7)',
            opacity: '.5'
          }))
        ], OPTIONAL_ELEMENT),
        query(':enter', [
          animate(slideDuration, style({
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }))
        ], OPTIONAL_ELEMENT)
      ]),
      query(':enter, :leave', animateChild(), OPTIONAL_ELEMENT),
    ])
  ]);
