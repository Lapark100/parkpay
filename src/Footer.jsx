export default function Footer() {

    return (
        <div className="footer-center">

<div className="footer-container">
<div className="footer-title">
<a href="/home" className="site-title-footer">ParkPay</a>
<p className="title-p">Experience the future of finance</p>
</div>
        <div class="footer-detail-one">
            <h3> Company</h3>
            <ul className="list1">
                <CustomLink className="li-footer">
                About us
                </CustomLink>
                <CustomLink className="li-footer">
                Careers
                </CustomLink>
                <CustomLink className="li-footer">
                Blog
                </CustomLink>
            </ul>
        </div>
        <div class="footer-detail-two">
            <h3> Products</h3>
            <ul className="list2">
                <CustomLink href="/airtime" className="footer-airtime li-footer">
                Buy Airtime & Data
                </CustomLink>
                <CustomLink href="/send" className="footer-send li-footer" >
                Send Money
                </CustomLink>
                <CustomLink href="/pay" className="footer-pay li-footer">
                Pay Bills 
                </CustomLink>
            </ul>
        </div>
        <div class="footer-detail-three">
            <h3> Contact</h3>
            <ul className="list3">
                <CustomLink className="li-footer">
                Support@parkpay.com   
                </CustomLink>
            </ul>
        </div>
    </div>
    <div className="footer-border">
        <p className="border-p">ParkPay, a pioneering financial service provided by Park Technologies, operates under the regulatory framework of leading financial institutions. As a trusted entity in the realm of financial technology, ParkPay specializes in cutting-edge solutions, offering a seamless blend of payment, savings, and credit services. Our innovative credit platform empowers both businesses and individuals, facilitating convenient installment payments across various online and offline merchants. At ParkPay, we prioritize accessibility, providing instant credit solutions right at the point of checkout. Join us in redefining the landscape of financial services with our commitment to efficiency, reliability, and financial empowerment.</p>
    </div>
    <p className="footer-p">
    ©2023. Park Technologies. All rights reserved
    </p>
        </div>
        
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname

    return (
        <li {...props}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}




