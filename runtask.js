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
      // start with priority and 
      // if priority for one is higher than all others
      if (p[j] < p[j + 1]) {
        // append to solution array

        // calculate current time
        time = time + d[j + 1];
      }
      // if same priority
      else if ((p[j] = p[j + 1])) {
        // compare start time (s)
        if (s[j] < s[j + 1]) {
          // if one start time for one is higher than all others, append to solution array

          // calculate current time
          time = time + d[j];
        }
        // if same start time
        else if ((s[j] = s[j + 1])) {
          // compare duration (d)
          if (d[j] < d[j + 1]) {
            // if one duration is higher than all others, append to solution array

            // calculate current time
            time = time + d[j];
          }
          // if same duration
          else if ((d[j] = d[j + 1])) {
            // compare position in array (i)
            if (i[j] < i[j + 1]) {
              // if one position is higher than all others, append to solution array

              // calculate current time
              time = time + d[j];
            }
          }
        }
      }

      // calculate current time

      // exit loop to check priority for remaining tasks
    }
  }

  // give solution array
  return task_order;
}
