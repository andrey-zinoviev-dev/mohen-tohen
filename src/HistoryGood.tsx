import { TransactionInterface } from "./interfaces";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
//interface
interface HistoryTransactionInterface {
    transaction: TransactionInterface
}


export default function HistoryGood({ transaction }: HistoryTransactionInterface) {
    return (
              <div className="history-goods__li-wrapper">
              <div className="list-column__wrapper-column">
                  <span>Товары: {transaction.goods.length}</span>
                  <div className="list-column__wrapper-column-pics">
                    {transaction.goods.map((good) => {
                        return <div className="list-column__wrapper-column-brand" key={good.good._id}>
                            <img className="list-column__wrapper-column-cover" key={good.good._id} src={good.good.photos[0]}></img>
                            <span>{good.good.title}</span>
                        </div>
                    })}
                  </div>
              </div>
              <div className="list-column__wrapper-column list-column__wrapper-column_brands">
                    <span>Бренды</span>
                    <div className="list-column__wrapper-column-pics">
                      {transaction.goods.map((good) => {
                        
                        return <Link className="list-column__wrapper-column-link" to={""}>
                          <img className="list-column__wrapper-column-cover list-column__wrapper-column-cover_round" src={good.good.seller.cover}></img>
                          <span>{good.good.seller.brandName}</span>
                          <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </Link>
                      })}
                    </div>
              </div>
              <div className="list-column__wrapper-column">
                  <span>Дата</span>
                  <span>17 Октября</span>
              </div>
              <div className="list-column__wrapper-column">
                  <span>Трек-номер</span>
                  <a className="list-column__wrapper-column-link" href="https://cdek.by/ru/tracking/">
                    110-95-218-094
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
              </div>
              <div className="list-column__wrapper-column">
                  <span>Сумма</span>
                  <span>{transaction.total}</span>
              </div>
            </div>
    )
}