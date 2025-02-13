export function HashMap() {
  let loadFactor = 0.75;
  let capacity = 12;
  let size = 0;
  let buckets = [];

  function resize() {
    let oldBuckets = buckets;
    capacity *= 2;
    buckets = [];
    size = 0;

    for (let i = 0; i < oldBuckets.length; i++) {
      if (oldBuckets[i]) {
        this.set(oldBuckets[i].key, oldBuckets[i].value);
      }
    }
  }

  return {
    hash(key) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode += primeNumber * hashCode + key.charCodeAt(i);
      }
      return hashCode;
    },
    set(key, value) {
      let hashCode = this.hash(key);
      let index = hashCode % capacity;

      if (!this.buckets) {
        this.buckets = [];
      }

      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }

      this.buckets[index] = { key: key, value: value };
      size++;

      if (size / capacity > loadFactor) {
        resize.call(this);
      }
    },
    get(key) {
      let hashCode = this.hash(key);
      let index = hashCode % capacity;

      if (!this.buckets) {
        return null;
      }

      return this.buckets[index] ? this.buckets[index].value : null;
    },
    has(key) {
      let hashCode = this.hash(key);
      let index = hashCode % capacity;

      if (!this.buckets) {
        return false;
      }

      return this.buckets[index] ? true : false;
    },
    remove(key) {
      let hashCode = this.hash(key);
      let index = hashCode % capacity;

      if (!this.buckets) {
        return null;
      }

      this.buckets[index] = null;
      size--;
    },
    length() {
      let count = 0;
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          count++;
        }
      }
      return count;
    },
    clear() {
      this.buckets = [];
      size = 0;
    },
    keys() {
      let keys = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          keys.push(this.buckets[i].key);
        }
      }
      return keys;
    },
    values() {
      let values = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          values.push(this.buckets[i].value);
        }
      }
      return values;
    },
    entries() {
      let entries = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          entries.push([this.buckets[i].key, this.buckets[i].value]);
        }
      }
      return entries;
    },
  };
}
