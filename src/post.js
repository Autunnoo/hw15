import React from "react";
// import { styles } from "./styles.js";
import headerIcon from "url:./img/icon.png";
import messagesIcon from "url:./img/messages.png";
import shareIcon from "url:./img/share.png";
import likesIcon from "url:./img/likes.png";
import repostIcon from "url:./img/repost.png";

export default function publication(props) {
    return (
        <div style={styles.PostComponent}>
            <div className='pub-header'>
                <div style={styles.Header}>
                    <img
                        src={props.author.photo}
                        alt='photo'
                        style={styles.UserPhoto}
                    />
                    <div style={styles.UserData}>
                        <div style={styles.UserInfo}>
                            <h2>
                                <a
                                    href='#'
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontSize: "24px",
                                        fontWeight: "bold"
                                    }}>
                                    {props.author.name}
                                </a>
                            </h2>
                            <img
                                src={headerIcon}
                                alt='photo'
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    paddingTop: "5px",
                                    WebkitUserDrag: "none"
                                }}
                            />
                            <a href='#' style={styles.Nickname}>
                                {props.author.nickname}
                            </a>
                            <span style={styles.Dot}>.</span>
                            <span style={{ color: "#8798A5" }}>
                                {props.date}
                            </span>
                        </div>
                        <span
                            style={{
                                paddingLeft: "10px",
                                fontWeight: "bold",
                                fontFamily: "Titillium Web"
                            }}>
                            {props.content}
                        </span>
                    </div>
                    <i style={styles.ArrowDown}></i>
                </div>
            </div>
            <div className='main-image'>
                <img style={styles.Image} src={props.image} alt='main image' />
            </div>
            <div style={styles.footerIcons}>
                <div style={styles.iconsContainer}>
                    <img
                        src={messagesIcon}
                        alt='messages'
                        style={{
                            width: "21px",
                            height: "20px",
                            WebkitUserDrag: "none",
                            cursor: "pointer"
                        }}
                    />
                    <span>482</span>
                </div>
                <div style={styles.iconsContainer}>
                    <img
                        src={shareIcon}
                        alt='share'
                        style={{
                            width: "23px",
                            height: "20px",
                            WebkitUserDrag: "none",
                            cursor: "pointer"
                        }}
                    />
                    <span>146</span>
                </div>
                <div style={styles.iconsContainer}>
                    <img
                        src={likesIcon}
                        alt='likes'
                        style={{
                            width: "21px",
                            height: "20px",
                            WebkitUserDrag: "none",
                            cursor: "pointer"
                        }}
                    />
                    <span>887</span>
                </div>
                <div style={styles.iconsContainer}>
                    <img
                        src={repostIcon}
                        alt='repost'
                        style={{
                            width: "21px",
                            height: "20px",
                            WebkitUserDrag: "none",
                            cursor: "pointer"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
