export class CostFormFields {
    readonly id = new Date().getTime();
    isWeightMode = false;
    amount: number | null = null;
    count: number | null = 1;
    weight: number | null = null;
    product: { id: number; name: string } | null = null;

    sumAmount() {
        return this.isWeightMode
            ? this.amount
            : this.count && this.amount
              ? this.count * this.amount
              : null;
    }
}
