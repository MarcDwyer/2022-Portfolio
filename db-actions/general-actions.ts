export type GeneralDBProps = {
  entryKey: string;
  db: Deno.Kv;
};
export type AdditionalKeys = string[];

export class GeneralDBActions<T> {
  db: Deno.Kv;
  private entryKey: string;

  constructor({ db, entryKey }: GeneralDBProps) {
    this.db = db;
    this.entryKey = entryKey;
  }
  private mergeKeys(additionalKeys?: AdditionalKeys) {
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

  async getSingleEntry(additionalKeys?: AdditionalKeys) {
    const { value } = await this.db.get<T>(this.mergeKeys(additionalKeys));
    return value;
  }

  saveEntry<J>(data: J, additionalKeys?: AdditionalKeys) {
    return this.db.set(this.mergeKeys(additionalKeys), data);
  }
  deleteEntry(additionalKeys?: AdditionalKeys) {
    return this.db.delete(this.mergeKeys(additionalKeys));
  }

  async *iterateEntries(additionalKeys?: AdditionalKeys) {
    for await (const { value } of this.db.list<T>({
      prefix: this.mergeKeys(additionalKeys),
    })) {
      yield value;
    }
  }
}
