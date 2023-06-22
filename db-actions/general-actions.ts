export type GeneralDBProps = {
  entryKey: string;
  db: Deno.Kv;
};
export type AdditionalKeys = string[];

export class GeneralDBActions<T> {
  db: Deno.Kv;
  entryKey: string;

  constructor({ db, entryKey }: GeneralDBProps) {
    this.db = db;
    this.entryKey = entryKey;
  }
  mergeKeys(additionalKeys?: AdditionalKeys) {
    if (!additionalKeys) {
      return [this.entryKey];
    }
    return [this.entryKey, ...additionalKeys];
  }
  async getAll(additionalKeys?: AdditionalKeys) {
    const result: T[] = [];

    for await (const { value } of this.db.list<T>({
      prefix: this.mergeKeys(additionalKeys),
    })) {
      result.push(value);
    }
    return result;
  }

  getSingleEntry(additionalKeys?: AdditionalKeys) {
    return this.db.get(this.mergeKeys(additionalKeys));
  }

  saveEntry(data: T, additionalKeys?: AdditionalKeys) {
    return this.db.set(this.mergeKeys(additionalKeys), data);
  }

  async *iterateEntries(additionalKeys?: AdditionalKeys) {
    for await (const { value } of this.db.list<T>({
      prefix: this.mergeKeys(additionalKeys),
    })) {
      yield value;
    }
  }
}
