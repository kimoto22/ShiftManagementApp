import React from 'react'
import styles from '../css/home.module.css'

export const Home = () => {
	return (
		<div>
			<h1>シフト管理アプリ</h1>
			<ShiftButton />
			<AdminButton />
		</div>
	)
}
function ShiftButton() {
	const handleShiftButtonClick = () => {
		// シフトの公休処理を実行
		console.log('シフトの公休ボタンがクリックされました')
	}

	return (
		<button className={styles.button} onClick={handleShiftButtonClick}>
			シフトの公休ボタン
		</button>
	)
}

function AdminButton() {
	const handleAdminButtonClick = () => {
		// 管理者画面への遷移処理を実行
		console.log('管理者画面ボタンがクリックされました')
	}

	return (
		<button className={styles.button} onClick={handleAdminButtonClick}>
			管理者画面
		</button>
	)
}
export default Home
