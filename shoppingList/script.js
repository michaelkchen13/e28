let app = new Vue({
    el: '#app',
    data: {
        item: '',
        itemList: [],
        shoppingList: '',
        qty: '',
    },
    methods: {
        addItem() {
            var obj = {}
            obj["Quantity"] = this.qty
            obj["Item"] = this.item

            this.itemList.push(obj);
        }
    }
})