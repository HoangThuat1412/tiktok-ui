import classNames from "classnames/bind";
import styles from "./AccountIteam.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <divb className={cx('wrapper')}>
            <img className={cx("avatar")} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3.jpeg?lk3s=30310797&nonce=10141&refresh_token=725c67446116c78cd2aadf2ef971ea1e&x-expires=1737363600&x-signature=bWYWFhQnVbrwCVion0vRSyC0hII%3D&shp=30310797&shcp=-"
                alt="Hoahnanasi" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Nguyen Van A</span>
            </div>
        </divb>
    )
}

export default AccountItem;