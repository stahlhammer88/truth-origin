import React from 'react';
import Button from '../ui/Button';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <input type="text" name="" id="" placeholder="Your email"/>
            <select name="" id="">
                <option value="">Select your country</option>
            </select>
            <div className="subscribe__agreement">
                <input type="checkbox" name="" id="agreement"/>
                <label htmlFor="agreement" className="">By submitting my information above, 
                I acknowledge that I have reviewed and hereby agree to the Privacy Policy 
                and Terms of Use.</label>
            </div>     
            <Button type="submit" text="Join" context="footer"/>
        </div>
    );
};

export default Subscribe;