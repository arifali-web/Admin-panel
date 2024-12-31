export const transactionForm = [
  {
    label: "Transaction Date",
    name: "date",
    rules: [{ required: true, message: "Please input transaction date!" }],
    type: "date",
  },
  {
    label: "Transaction No",
    name: "transaction_no",
    rules: [{ required: true, message: "Please input transaction no!" }],
    type: "text",
  },
  {
    label: "Primary Cash Received Account",
    name: "account",
    rules: [
      {
        required: true,
        message: "Please input primary cash received account!",
      },
    ],
    type: "select",
  },
  {
    label: "Purpose of the Transaction",
    name: "purpose",
    rules: [
      { required: true, message: "Please input purpose of the transaction!" },
    ],
    type: "text",
  },
  {
    label: "Name Of the Agent",
    name: "agent",
    rules: [{ required: true, message: "Please input name of the agent!" }],
    type: "select",
  },
  {
    label: "Commission Rate",
    name: "comission_rate",
    rules: [{ required: true, message: "Please input commission rate!" }],
    type: "number",
  },
  {
    label: "Cash Received Amount",
    name: "received_amount",
    rules: [{ required: true, message: "Please input cash received amount!" }],
    type: "number",
  },
  {
    label: "Currency",
    name: "currency",
    rules: [{ required: true, message: "Please input currency!" }],
    type: "select",
  },
  {
    label: "Exchange Rate Client",
    name: "exchange_rate_client",
    rules: [{ required: true, message: "Please input exchange rate!" }],
    type: "number",
  },
  {
    label: "Earned Profit",
    name: "earned_profit",
    rules: [{ required: true, message: "Please input earned profit!" }],
    type: "number",
  },
  {
    label: "Excange Rate Us",
    name: "exchange_rate_us",
    rules: [{ required: true, message: "Please input exchange rate us!" }],
    type: "number",
  },
  {
    label: "Instruct to pay Amount",
    name: "instructed_amount",
    rules: [
      { required: true, message: "Please input instruct to pay amount!" },
    ],
    type: "number",
  },
  {
    label: "Invoice Curruncy",
    name: "invoice_currency",
    rules: [{ required: true, message: "Please input invoice curruncy!" }],
    type: "select",
  },
  {
    label: "Payment Amount",
    name: "payment_amount",
    rules: [{ required: true, message: "Please input payment amount!" }],
    type: "number",
  },
  {
    label: "Bank payment fee",
    name: "payment_fee",
    rules: [{ required: true, message: "Please input bank payment fee!" }],
    type: "number",
  },
  {
    label: "Payment Status",
    name: "payment_status",
    rules: [{ required: true, message: "Please input payment status!" }],
    type: "text",
  },
  {
    label: "Paid Date",
    name: "paid_date",
    rules: [{ required: true, message: "Please input paid date!" }],
    type: "date",
  },
  {
    label: "Bank Rate",
    name: "bank_rate",
    rules: [{ required: true, message: "Please input bank rate!" }],
    type: "number",
  },
];
