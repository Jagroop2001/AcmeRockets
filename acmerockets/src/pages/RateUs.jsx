import React from 'react'
import "../styles/RateUs.css"

const RateUs = () => (
    <main className="main-container">
        <div className="outer-container">
            <div className="inner-container">
                <div className="emoji-section">
                    <div className="rate1">😑</div>
                    <div className="rate2">🙁</div>
                    <div className="rate3">😐</div>
                    <div className="rate4">😊</div>
                    <div className="rate5">😄</div>
                </div>
                <div className="rating-section">
                    <div className="message text-black" >
                        Rating Score
                    </div>
                    <div className="rate1 text-black">1</div>
                    <div className="rate2 text-black">2</div>
                    <div className="rate3 text-black">3</div>
                    <div className="rate4 text-black">4</div>
                    <div className="rate5 text-black">5</div>
                </div>
                <div className="rating-description">
                    <div className="message text-black" >
                        User Mood
                    </div>
                    <div className="rate1 text-black">Very Unsatisfied</div>
                    <div className="rate2 text-black">Unsatisfied</div>
                    <div className="rate3 text-black">Neutral</div>
                    <div className="rate4 text-black">Satisfied</div>
                    <div className="rate5 text-black">Very Satisfied</div>
                </div>
                <div className="submit-section">
                    <a href="#">Submit</a>
                </div>
            </div>
        </div>
    </main>
)

export default RateUs
