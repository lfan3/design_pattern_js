/**
 * One scenario where Adapters are commonly used is
 *  when new components need to be integrated and work together with existing components in the application.
 * 
 * Another scenario is refactoring in which parts of the 
 * program are rewritten with an improved interface, but the old code still expects the original interface.
 */
function OldShipping() {
    this.request = function (zipStart, zipEnd, weight) {
        this.traget = `from ${zipStart} to ${zipEnd}`;
        return 3 * weight;
    }
}

function NewShipping(credential) {
    this.login = function (credentials) { /* ... */ };
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function (destination) { /* ... */ };
    this.calculate = function (weight) { return "$39.50"; };
}

function shippingAdapter() {
    const newShipping = new NewShipping();
    const token = "abc-12-23efa";
    newShipping.login(token);

    return {
        request: (zipStart, zipEnd, weight) => {
            newShipping.setStart(zipStart);
            newShipping.setDestination(zipEnd);
            newShipping.calculate(weight);
        }
    }
}

function clientCode() {
    const oldShipping = new OldShipping();
    oldShipping.request("start", "end", 23);

    const adapter = new shippingAdapter();
    adapter.request("start", "end", 23);

    // if i change the name of adpater into shipping, this one will replace the oldshipping
    const shipping = new shippingAdapter();
    shipping.request("start", "end", 23)
}