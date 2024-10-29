import React, { Fragment } from 'react';

const Help = () => {
  return (
    <Fragment>
      <div className='mt-20 h-auto p-5 md:h-[90vh]'>
        <h1 className='text-3xl font-bold mb-4 text-center md:text-left'>Help Center</h1>

        <h2 className='text-2xl font-semibold mt-5'>Privacy Policy</h2>
        <p className='mb-4'>
          We value your privacy and are committed to protecting your personal information. Please read our privacy policy to understand how we collect, use, and safeguard your data.
        </p>

        <h2 className='text-2xl font-semibold mt-5'>Managing Your Orders</h2>
        <p className='mb-4'>
          You can manage your orders directly from your account. To view or change your order status, log in to your account and navigate to the 'My Orders' section. Here, you can track shipments, request cancellations, and initiate returns.
        </p>

        <h2 className='text-2xl font-semibold mt-5'>Shipping Information</h2>
        <p className='mb-4'>
          We strive to provide fast and reliable shipping options. Once your order is placed, you will receive a confirmation email with tracking information. For any questions regarding shipping times or methods, feel free to reach out to our support team.
        </p>

        <h2 className='text-2xl font-semibold mt-5'>FAQs</h2>
        <p className='mb-4'>
          Check out our Frequently Asked Questions section for quick answers to common queries about orders, payment methods, returns, and more.
        </p>

        <h2 className='text-2xl font-semibold mt-5'>Contact Support</h2>
        <p className='mb-4'>
          If you need further assistance, please contact our support team at <a href="mailto:support@example.com" className='text-blue-600 underline'>support@example.com</a> or through the contact form on our website.
        </p>
      </div>
    </Fragment>
  );
}

export default Help;
