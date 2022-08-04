function runtask(s, d, p) {
  // note: i is place in array, 0 <= i <= (n-1)
  // find how many tasks are in the input (n) by checking (s)
  n = len(s);

  // create array for solution
  task_order = [];

  for (i = 0; i < n; i++) {
    task_order.push[i];
  }

  // define time
  time = 0;

  for (i = 0; i < n; i++) {
    for (j = 0; j < i; j++) {
      // compare priority (p)
      // if priority for one is higher than all others
      if (p[j] < p[j + 1]) {
        // append to solution array
        task_order.push[i] = task_order;

        // calculate current time

        // exit loop to check priority for remaining tasks
      } else {
      }

      // if same priority, compare start time (s)

      // if one start time for one is higher than all others, append to solution array

      // calculate current time

      // exit loop to check priority for remaining tasks

      // if same start time, compare duration (d)

      // if one duration is higher than all others, append to solution array

      // calculate current time

      // exit loop to check priority for remaining tasks

      // if same duration, compare place in array (i)

      // if one i is higher than others, append to solution array

      // calculate current time

      // exit loop to check priority for remaining tasks
    }
  }

  // give solution array
  return task_order;
}
