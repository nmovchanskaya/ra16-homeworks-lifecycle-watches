import { WatchType } from "./WatchType";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'

export const WatchList = (props: {watches: WatchType[], onDelete: (city: string) => void}) => {

    dayjs.extend(customParseFormat);
    dayjs.extend(utc);
    dayjs.extend(tz);

    const {watches, onDelete} = props;
  
    return (
        <>
            <table className="tracklist">
                {watches.map((item: WatchType) => {
                    return (
                        <tr className="watchlist__item">
                            <td className="watchlist__td">
                                {item.city}
                            </td>
                            <td className="watchlist__td">
                                {dayjs(new Date(Date.now() + item.timezone * 3600 * 1000)).tz("Europe/London").format('DD.MM.YYYY HH:mm:ss')}
                            </td>
                            <td className="watchlist__del">
                                <button className="watchlist__del_btn" onClick={() => {onDelete(item.city)}}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}