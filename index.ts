import './style.css';

import { of, map, Observable, BehaviorSubject, combineLatest } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

const items = [1, 2, 3, 4, 5, 6, 7, 8];

const list = of(items);
const filter = new BehaviorSubject('odd');

const btn = document
  .querySelector('#changebtn')
  .addEventListener('click', (e) => {
    const newValue = filter.value === 'even' ? 'odd' : 'even';
    filter.next(newValue);
  });

const obs$ = combineLatest([list, filter])
  .pipe(
    map(([list, filter]) => {
      if (filter == 'odd') return list.filter((item) => item % 2 !== 0);
      if (filter == 'even') return list.filter((item) => item % 2 == 0);
      return list;
    })
  )
  .subscribe((rs) => {
    console.log(rs);
  });
