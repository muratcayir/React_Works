import styles from "./styles.module.css"

export default function ChatItem({item}) {

    return (
        <div className={`${styles.chatItem} ${item.fromMe ? styles.right :""}`}>
            {item.message}
        </div>
    )
}
