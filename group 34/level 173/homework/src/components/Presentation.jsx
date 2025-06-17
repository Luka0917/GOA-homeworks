export default function Presentetion(){
    return (
        <div>
            <table className="border">
                <thead>
                    <tr className="border">
                        <th className="border">Question</th>
                        <th className="border">Normal variable</th>
                        <th className="border">UseRef</th>
                        <th className="border">UseState</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="border text-center">Does it retain the value after rerendering?</td>
                        <td className="border text-center">❌</td>
                        <td className="border text-center">✅</td>
                        <td className="border text-center">✅</td>
                    </tr>
                    <tr>
                        <td className="border text-center">Does it trigger a re-render when changed?</td>
                        <td className="border text-center">❌</td>
                        <td className="border text-center">❌</td>
                        <td className="border text-center">✅</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}