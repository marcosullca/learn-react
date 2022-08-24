import jsPDF from 'jspdf'
import React from 'react'
export default function ReadFile1() {

    const doc = new jsPDF()

    const savePDF = (e) => {
        doc.html('<!DOCTYPE html>' +
            '<html lang="en">' +

            '<head>' +

            '</head>' +

            '<body>' +

            '<p>asdad</p>' +
            '</body>' +

            '</html>', {
            callback: function (pdf) {
                pdf.save('archivo.pdf')
            }
        })
    }

    return (
        <div>
            <button onClick={savePDF}>IMPRIMIR</button>
        </div>
    )
}
