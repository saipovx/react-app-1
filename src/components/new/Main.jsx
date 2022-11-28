

import {Link} from "react-router-dom";
import Table from '../../utils/GenerateTable'
import {useState} from "react";

export default function Main(){
  const [CompanyId, setCompanyId] = useState(17);
  return (<>
    <section className="section__main">

      <h1 className="main__title">Список товаров</h1>

      <div className="tabs">
        <div className="tabs__header">
          <div className="tabs__header-item active">Все товары <span>0</span></div>
          <div className="tabs__header-item">В продаже <span>0</span></div>
          <div className="tabs__header-item">Готовы к продаже <span>0</span></div>
          <div className="tabs__header-item">С ошибками <span>0</span></div>
          <div className="tabs__header-item">Требует доработки <span>0</span></div>
          <div className="tabs__header-item">Без фото <span>0</span></div>
          <div className="tabs__header-item">Снятые с продажи <span>0</span></div>
          <div className="tabs__header-item">В архиве <span>0</span></div>
          <hr className="tabs__header-hr"/>
        </div>

        <div className="tabs__content">
          <div className="tabs__content-item" style={{display: 'flex'}}>
            <div className="navig">
              <div className="navig__item">
                <form className="navig__item-form">
                  <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       fill="#D4D9E2" width="24" height="24" className="icon4 index_icon_3aeUt index_icon_1I28u"
                       style={{minWidth: '24px'}}>
                    <defs>
                      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search--sprite">
                        <path
                          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                      </symbol>
                    </defs>
                    <use href="#search--sprite" fill="#D4D9E2"></use>
                  </svg>
                  <input type="text" placeholder="Поиск" className="navig__item-form-input"/>
                    <hr className="form__hr"/>
                </form>
                <button className="navig__item-btn">Выбрать категории</button>
              </div>
              <div className="navig__item2">
                <button className="navig__item-btn">Добавить товар</button>
                <button className="navig__item-btn">Импорт</button>
                <button className="navig__item2-btn" id="navig__btn">
                  Скачать шаблон
                  <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="16"
                       height="16" className="icon2 index_chevron_rV2nw">
                    <path fill="#001122"
                          d="M7.293 11.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L8 9.586 4.707 6.293a1 1 0 0 0-1.414 1.414l4 4Z"
                          fillOpacity="0.45"></path>
                  </svg>
                  <div className="okno__btn" id="navig" style={{display: 'none'}}>
                    <ul className="okno__btn-ul">
                      <li className="okno__btn-li"><Link className="okno__btn-link" href="#">Обновление цен</Link></li>
                    </ul>
                  </div>
                </button>
                <button className="navig__item2-btn" id="navig__btn2">
                  Скачать товары
                  <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="16"
                       height="16" className="icon2  index_chevron_rV2nw">
                    <path fill="#001122"
                          d="M7.293 11.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L8 9.586 4.707 6.293a1 1 0 0 0-1.414 1.414l4 4Z"
                          fillOpacity="0.45"></path>
                  </svg>
                  <div className="okno__btn" id="navig2" style={{display: 'none'}}>
                    <ul className="okno__btn-ul">
                      <li className="okno__btn-li"><Link className="okno__btn-link" href="#">Обновление цен</Link></li>
                      <li className="okno__btn-li"><Link className="okno__btn-link" href="#">Обновление цен Обновление
                        цен</Link></li>
                      <li className="okno__btn-li"><Link className="okno__btn-link" href="#">Обновление цен Обновление
                        цен</Link></li>
                    </ul>
                  </div>
                </button>
                <button className="navig__item2-btn" id="navig__btn3">
                  <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       fill="#216BFF" width="24" height="24" className="icon index_icon_3aeUt custom-button_icon_3AOIb"
                       style={{minWidth: '24px'}}>
                    <defs>
                      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="download--sprite">
                        <path d="M19 11h-4V4H9v7H5l7 7 7-7zM5 19v2h14v-2H5z"></path>
                      </symbol>
                    </defs>
                    <use href="#download--sprite" fill="#216BFF"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table url={'template_message'} company_id={CompanyId} />
    </section>
  </>)

}
