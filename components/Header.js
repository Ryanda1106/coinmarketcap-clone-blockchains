import React from'react'
import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = {
    header: `bg-[#17171A] h-20 text-white flex gap-[100px] w-full p-[15px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx--auto px-4`,
    nav: `flex justify-center items-center gap-[20px]`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60 `,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    inputContainer: `flex item-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-5`,
}

const Header = () => {
    return (
        <div className={styles.header}>
            <Image
            src='https://raw.githubusercontent.com/Ryanda1106/rizera/main/logo2.png'
            alt='logo'
            width={220}
            height={220}
            />

            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}
                        >Cryptocurrency</div>
                        <div className={styles.badge} />
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Exchange</div>                       
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>NFT</div>
                        <div className={styles.badge}/>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Cryptown</div>
                        <div className={styles.badge}/>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Portofolio</div>                       
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Watchlist</div>                       
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Products</div>
                        <div className={styles.badge}/>
                    </div>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Learn</div>                       
                    </div>
                </nav>

                <div className='flex items-center'>
                    {/* <ConnectButton /> */}
                    <div className={styles.inputContainer}>
                        <Search />
                        <input className={styles.input} placeholder = 'Search' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header