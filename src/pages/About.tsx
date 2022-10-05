import { FC } from "react"

const About: FC = () => {
    return (
        <div className="py-5">
            <div className='row justify-content-center'>
                <div className='col-12 col-xxl-6 col-xl-6 col-lg-8 col-md-10'>
                    <h1 className="mb-5">About page</h1>
                    <p>Это простое приложения со списком задач. Приложение написано на React в функциональном стиле.</p>
                    <p><strong>В этом приложении:</strong></p>
                    <ul>
                        <li>React v18 + TypeScript</li>
                        <li>Авторизация через Google Firebase</li>
                        <li>Работа с элементами через LocalStorage: добавление, редактирование, удаление</li>
                        <li>Сделана сортировка и поиск по списку задач</li>
                        <li>Настроен роутинг через React Router v6</li>
                        <li>Компонентный подход</li>
                        <li>Bootstrap v5</li>
                        <li>React hooks</li>
                        <li>Сборщик - Vite</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About