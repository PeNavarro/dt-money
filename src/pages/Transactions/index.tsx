import { useContext } from "react"
import { Header } from "../../components/Header/index.tsx"
import { SearchForm } from "../../components/SearchForm/index.tsx"
import { Summary } from "../../components/Summary/index.tsx"
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles.ts"
import { TransactionsContext } from "../../contexts/TransactionsContext.tsx"

export function Transactions(){
    const { transactions } = useContext(TransactionsContext)

    return(
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return(
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                            R$ {transaction.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}