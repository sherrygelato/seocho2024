import { FaRegEdit, FaRegTrashAlt, FaUndo, FaShoppingCart } from "react-icons/fa";
import Button from "./Button"
import Input from "./Input"

export default function ItemEdit({
    item,
    itemNameRef,
    itemPriceRef,
    cancel, // cancelEditing | cancelAdding
    save, // saveItem | eddItem
}) {

    const saveIcon = item.id ? <FaShoppingCart /> : <FaRegTrashAlt />

    const itemNameRef = useRef();
    const itemPriceRef = useRef();

    const cancelAdding = (evt) => {
        evt.preventDefault()
        setIsAdding(false)
    } 
    const addItem = (evt) => {
        evt.preventDefault()
        const itemName = itemNameRef.current.value;
        const itemPrice = itemPriceRef.current.value;

        if (!itemName || !itemPrice) {
        alert("상품명과 금액을 정확히 입력하세요");
        itemName.current.focus();
        return;
        }

        addCartItem(itemName, +itemPrice);
        setIsAdding(false)
    };

    const saveItem = (evt) => {
        evt.preventDefault();
        const itemName = itemNameRef.current.value;
        const itemPrice = itemPriceRef.current.value;
        console.log("🚀  itemName, itemPrice:", itemName, itemPrice);
        if (!itemName || !itemPrice) {
          alert("상품명과 금액을 정확히 입력하세요!");
          itemNameRef.current.focus();
          return;
        }
        saveCartItem(editingItem.id, itemName, +itemPrice);
        setEditingItem(null);
      };

    return (
        <form className="m-2 flex gap-3 border border-green-300 p-3">
            <Input ref={itemNameRef} placeholder="상품명" />
            <Input
                ref={itemPriceRef}
                type="number"
                placeholder="금액"
            />
            <Button
                text={<FaUndo />}
                onClick={cancel}
                size="sm"
            />
            <Button
                text={saveIcon}
                onClick={save}
                type="primary"
                size="sm"
            />
        </form>)
}
