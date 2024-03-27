import { Typography } from 'antd';

const { Title } = Typography;

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mx-auto mt-8 p-4">
            <Title level={2} className="text-3xl">{greeting}</Title>
            <p className="text-lg">
                CodeBook Emporium es tu destino número uno para los libros más actualizados y relevantes sobre programación, informática, desarrollo web, ciencia de datos y mucho más. Ya seas un principiante en el mundo de la programación o un desarrollador experimentado en busca de recursos avanzados, tenemos una amplia selección de libros para satisfacer tus necesidades.
            </p>
            <Title level={3} className="text-2xl">Categorías de Libros</Title>
            <div className="border border-gray-200 p-4 rounded-md">
                <ul className="list-disc ml-4">
                    <li>Programación en General</li>
                    <li>Desarrollo Web</li>
                    <li>Bases de Datos</li>
                    <li>Ciencia de Datos y Big Data</li>
                    <li>Inteligencia Artificial y Aprendizaje Automático</li>
                    <li>Seguridad Informática</li>
                    <li>Sistemas Operativos</li>
                    <li>Redes y Comunicaciones</li>
                </ul>
            </div>
            <p className="text-lg">
                ¡Explora el mundo de los libros de informática con CodeBook Emporium!
            </p>
        </div>
    );
};

export default ItemListContainer;
