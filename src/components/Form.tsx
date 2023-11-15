export const Form = (props: {
    addWatch: React.MouseEventHandler, 
    setForm: React.Dispatch<React.SetStateAction<{
        city: string;
        timezone: string;
    }>>, 
    form: {
        city: string;
        timezone: string;
    }
}) => {

const {addWatch, setForm, form} = props;

const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setForm({...form, [name]: value});
}

return (
    <form onSubmit={event => event.preventDefault}>
        <input 
            className="addform__input"
            type="text" 
            name="city"
            placeholder="City" 
            value={form.city}
            onChange={handlerInputChange} 
        />
        <input 
            className="addform__input"
            type="text" 
            name="timezone"
            placeholder="Timezone"
            value={form.timezone}
            onChange={handlerInputChange} 
        />
        <button type="submit" className="addform__submit" onClick={addWatch}>Add</button>
    </form>
)
}
