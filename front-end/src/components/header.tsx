import React from "react"
import Appbar from 'muicss/lib/react/appbar';
import Style from '../styles/header.module.scss';

const headerClass = 'mui--appbar mui--z1 ' + Style.header;
const tableClass = Style.table;
const listClass = 'mui--text-body2 mui-list--inline ' + Style.muiListInline;

export default () => (
  <Appbar className={headerClass}>
    <table className={tableClass}>
        <tr className="mui--appbar-height">
          <td className="mui--text-title">Brand.io</td>
          <td className="mui--text-right">
            <ul className={listClass}>
              <li><a href="#">About</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </td>
        </tr>
      </table>
  </Appbar>
)
