Note taker: 
* dipslay on the left
* notes on the right
* for our persistent data, we're writing it to db.json (and deleting it from that).
  use fs.writefile, fs.readfile
  when you need to delete(or add) to the db file: read the file, manipulate data, and then re-write.

* the only require we need is express

