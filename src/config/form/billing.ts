export default [
    {
        name: 'invoiceNumber',
        label: 'Invoice Number',
        type: 'text',
        placeholder: 'Enter invoice number',
        rules: [{ required: true, message: 'Please enter the invoice number' }],
    },
    {
        name: 'date',
        label: 'Date',
        type: 'date', // Assuming you want a calendar date picker
        placeholder: 'Enter date',
        rules: [{ required: true, message: 'Please enter the date' }],
    },
    {
        name: 'amount',
        label: 'Amount',
        type: 'text',
        placeholder: 'Enter amount',
        rules: [{ required: true, message: 'Please enter the amount' }],
    },
    {
        name: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Select status',
        rules: [{ required: true, message: 'Please select a status' }],
        options: [
            { label: 'Paid', value: 'Paid' },
            { label: 'Pending', value: 'Pending' },
        ],
    },
];