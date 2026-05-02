# Web3Forms Setup Guide

## How to Get Your Access Key and Enable Email Notifications

Follow these steps to make your contact form functional:

### Step 1: Get Your Free Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click on **"Get Started for Free"** or **"Create Access Key"**
3. Enter your email: **info@khanfishsupplier.com**
4. Click **"Create Access Key"**
5. You'll receive an email with your **Access Key**

### Step 2: Verify Your Email

1. Check the inbox of **info@khanfishsupplier.com**
2. Open the email from Web3Forms
3. Click the verification link
4. Copy your **Access Key** (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 3: Add Access Key to Your Website

1. Open the file: `seafood-market/components/ContactSection.tsx`
2. Find line 30 where it says: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key
4. Save the file

**Example:**
```typescript
access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // Your actual key
```

### Step 4: Test Your Form

1. Run your development server: `npm run dev`
2. Go to the contact section on your website
3. Fill out the form and submit
4. Check **info@khanfishsupplier.com** for the email

### Step 5: Deploy to Vercel

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add Web3Forms email functionality"
   git push origin main
   ```
2. Vercel will automatically deploy your changes
3. Test the form on your live website

## What Happens When Someone Submits the Form?

1. User fills out the contact form
2. Form data is sent to Web3Forms API
3. Web3Forms sends an email to **info@khanfishsupplier.com**
4. Email includes:
   - Name (First + Last)
   - Email address
   - Message
   - Subject: "New Contact Form Submission - Khan Fish Supplier"

## Email Format You'll Receive

```
From: Khan Fish Supplier Website
To: info@khanfishsupplier.com
Subject: New Contact Form Submission - Khan Fish Supplier

Name: John Doe
Email: john@example.com

Message:
[User's message here]
```

## Features

✅ **Free Plan Includes:**
- 250 submissions per month
- Email notifications
- Spam protection
- No credit card required

✅ **Automatic Features:**
- Form validation
- Spam filtering
- Email delivery
- Success/error handling

## Troubleshooting

**Form not sending emails?**
1. Make sure you replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
2. Verify your email address in Web3Forms dashboard
3. Check spam folder in info@khanfishsupplier.com
4. Check browser console for errors

**Need more submissions?**
- Free plan: 250/month
- Pro plan: Unlimited submissions ($5/month)

## Support

- Web3Forms Documentation: https://docs.web3forms.com
- Web3Forms Dashboard: https://web3forms.com/dashboard

---

**Important:** Keep your access key secure. Don't share it publicly or commit it to public repositories if you want to keep it private.
