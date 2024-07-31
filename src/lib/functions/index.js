export const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFillColor(12, 74, 110); // Blue color
    doc.setDrawColor(255); // White border color
    doc.roundedRect(2, 2, 206, 36, 5, 5, 'F'); // Rounded blue background rectangle with barely visible margin

    doc.setFontSize(18);
    doc.setTextColor(255); // White color
    doc.text('Your Exercise Plan', 10, 17);
    let y = 45; // Initial y position for content
    let pageHeight = doc.internal.pageSize.height;

    Object.entries(days).forEach(([day, exercises]) => {
        if (exercises.length > 0) {
            if (y + 40 + exercises.length * 10 > pageHeight) {
                doc.addPage();
                y = 20;
            }
            doc.setFillColor(200, 200, 200); // Gray background color
            doc.rect(10, y, 190, 10, 'F');

            doc.setFontSize(14);
            doc.setTextColor(0); // Black color
            doc.text(day, 15, y + 7);

            doc.setFillColor(240, 240, 240); // Light gray background color for table headers
            doc.rect(10, y + 12, 190, 10, 'F');

            doc.setFontSize(12);
            doc.setTextColor(50); // Dark gray color for text
            doc.text('Exercise Name', 15, y + 20);
            doc.text('Muscle Type', 75, y + 20);
            doc.text('Reps', 115, y + 20);
            doc.text('Sets', 155, y + 20);

            exercises.forEach((exercise, index) => {
                if (y + 30 + index * 10 > pageHeight) {
                    doc.addPage();
                    y = 20;
                }

                const rowColor = index % 2 === 0 ? [255, 255, 255] : [245, 245, 245];

                doc.setFillColor(rowColor[0], rowColor[1], rowColor[2]);
                doc.rect(10, y + 22 + index * 10, 190, 10, 'F');

                doc.setTextColor(0);
                doc.text(exercise.name, 15, y + 30 + index * 10);
                doc.text(exercise.muscle, 75, y + 30 + index * 10);
                doc.text(exercise.reps.toString(), 115, y + 30 + index * 10);
                doc.text(exercise.sets.toString(), 155, y + 30 + index * 10);
            });

            y += 30 + exercises.length * 10;
        }
    });

    doc.save('exercise_plan.pdf');
};