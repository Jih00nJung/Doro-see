import React, {useState} from "react";
import "./Signup.css";

const Signup = () => {
    const [users, setFormData] = useState({
        user_id: "",
        user_pw: "",
        conf_user_pw: "",
        user_name: "",
        user_age: "",
        user_phonenumber: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev_data) => ({
            ...prev_data,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.user_pw !== users.conf_user_pw) {
            alert("비밀번호가 일치하지 않습니다.");
        } else {
            alert("회원가입이 완료되었습니다.");
            console.log(users);
        }
    };

    return (
        <div className="signup_container">
            <span className="signup_label">회원가입</span>
            <br/>
            <br/>
            <form className="signup_form" onSubmit={handleSubmit}>
                <div className="form_group">
                    <div className="per_form">
                        <label>아이디</label>
                        <input
                            type="text"
                            id="user_id"
                            name="user_id"
                            value={users.user_id}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="per_form">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            id="user_pw"
                            name="user_pw"
                            value={users.user_pw}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="per_form">
                        <label>비밀번호 확인</label>
                        <input
                            type="password"
                            id="conf_user_pw"
                            name="conf_user_pw"
                            value={users.conf_user_pw}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br/>
                    <div className="per_form">
                        <label>이름</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            value={users.user_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="per_form">
                        <label>나이</label>
                        <input
                            type="number"
                            id="user_age"
                            name="user_age"
                            value={users.user_age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="per_form">
                        <label>전화번호</label>
                        <input
                            type="text"
                            id="user_phonenumber"
                            name="user_phonenumber"
                            value={users.user_phonenumber}
                            placeholder="예) 01012345678"
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                            }}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>
                <button type="submit" className="signup_submit">가입하기</button>
            </form>
        </div>
    );
};

export default Signup;
