import Transaction from "./components/Main/Transaction";
import Transactions from "./components/Main/Transactions";
import { MAIN_ROUTE, TRANSACTIONS_ROUTE, TRANSACTION_ROUTE } from "./utiles/constants";
import Main from "./components/Main";


export const financeRouters = [
    {
        path: MAIN_ROUTE,
        Element: Main,
    },
    {
        path: TRANSACTIONS_ROUTE,
        Element: Transactions
    },
    {
        path: TRANSACTION_ROUTE,
        Element: Transaction
    }
];