import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogDetail.scss";
import AvatarRound from "../../../assets/images/ava.png";
import blogApis from "../../../apis/blogApis";

function BlogDetail(props) {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function asyncProject() {
            const res = await blogApis.getBlogById(id);
            setData(res);
        }
        asyncProject();
    }, [id]);

    return (
        <div className="blog-detail-container">
            {data ? (
                <div className="blog-detail">
                    <div className="blog-detail-title">
                        <h4>{data.title}</h4>
                        <span class="animate-border mt-2 mb-6"></span>
                    </div>
                    <div className="blog-detail-author">
                        <div className="blog-detail-author-left">
                            <img src={AvatarRound} alt="Avatar" />
                        </div>
                        <div className="blog-detail-author-right row">
                            <div className="blog-detail-author-name">
                                <p>Dang Ngo Hong Hai</p>
                            </div>
                            <div className="blog-detail-author-name-link">
                                <Link to="/" className="author-name-link">
                                    anthony.haidang
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="blog-detail-content"
                        dangerouslySetInnerHTML={{
                            __html: data.content,
                        }}
                    ></div>
                </div>
            ) : (
                <div className="loader"></div>
            )}
        </div>
    );
}

export default BlogDetail;
