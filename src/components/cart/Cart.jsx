import styles from './Cart.module.css'
const {header_cart} = styles
function Cart() {
    return (
        <>
            <span className={[header_cart].join(" ")}>
                <i className="bi bi-bag"></i>
            </span>
        </>
    )
}
export default Cart