import '../../addEventListener.mock';
import '../../attachEvent.mock';
import '../../alert.mock';

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import  Account  from "../../screens/Account/Account.js";
import * as firebase from 'firebase';
import { auth } from '../../screens/Authentication/firebase';


afterEach(cleanup);

// Test that the Account Screen renders correctly
describe('Account Screen', () => {
    it('renders correctly', () => {
        const navigate = jest.fn();
        const { getByText } = render(<Account navigation={{ }}/>);
        // const titleElement1 = getByText({firebase.auth().currentUser});
        const titleElement3 = getByText('Email');
        const titleElement4 = getByText('Password');
        const titleElement5 = getByText('My Wallet');
        const titleElement6 = getByText('Order History');
        const titleElement7 = getByText('Push Notifications');
        const titleElement8 = getByText('App Feedback');
        const titleElement9 = getByText('Log Out');

        // expect(titleElement1).toBeTruthy();
        expect(titleElement3).toBeTruthy();
        expect(titleElement4).toBeTruthy();
        expect(titleElement5).toBeTruthy();
        expect(titleElement6).toBeTruthy();
        expect(titleElement7).toBeTruthy();
        expect(titleElement8).toBeTruthy();
        expect(titleElement9).toBeTruthy();
    });
});

// On Pressing Button Links, Navigate to the correct screen
describe('Account Screen', () => {
        it('redirects to the correct screen', () => {
        const navigate = jest.fn();
        const { getByText } = render(<Account navigation={{ navigate }}/>);
        const titleElement3 = getByText('Email');
        const titleElement4 = getByText('Password');
        const titleElement5 = getByText('My Wallet');
        const titleElement6 = getByText('Order History');
        const titleElement7 = getByText('Push Notifications');
        const titleElement8 = getByText('App Feedback');
        const titleElement9 = getByText('Log Out');

        fireEvent.press(titleElement3);
        fireEvent.press(titleElement4);
        fireEvent.press(titleElement5);
        fireEvent.press(titleElement6);
        fireEvent.press(titleElement7);
        fireEvent.press(titleElement8);
        fireEvent.press(titleElement9);

        expect(navigate).toHaveBeenCalledTimes(6);
        expect(navigate).toHaveBeenNthCalledWith(1, 'Account_email');
        expect(navigate).toHaveBeenNthCalledWith(2, 'Account_password');
        expect(navigate).toHaveBeenNthCalledWith(3, 'MyCard');
        expect(navigate).toHaveBeenNthCalledWith(4, 'Account_orders_history_screen');
        expect(navigate).toHaveBeenNthCalledWith(5, 'App_notifications');
        expect(navigate).toHaveBeenNthCalledWith(6, 'Account_App_feedback');
        // expect(navigate).toHaveBeenNthCalledWith(8, 'SignIn');
    });
});