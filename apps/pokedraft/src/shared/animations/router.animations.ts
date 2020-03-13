import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const slideDuration = '500ms cubic-bezier(.17,.67,.4,1)';

export const routerAnimations =
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
      ]),
      query(':enter', [
        style({
          left: '-100%',
          transform: 'translate(0, -50%)'
        })
      ]),
      query(':leave', [
        style({ transform: 'translate(-50%, -50%)' })
      ]),
      group([
        query(':leave', [
          animate(slideDuration, style({
            left: '100%',
            transform: 'translate(0, -50%) scale(.7)',
            opacity: '.5'
          }))
        ]),
        query(':enter', [
          animate(slideDuration, style({
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }))
        ])
      ]),
      query(':enter, :leave', animateChild()),
    ])
  ]);
