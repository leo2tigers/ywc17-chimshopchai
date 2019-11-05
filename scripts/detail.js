import sanitizeHtml from 'sanitize-html';

/**
 * 
 * @param {string} durationText 
 */
export function setDurationText(durationText) {
    const sanitizedDurationText = sanitizeHtml(durationText);
    document.getElementById('duration').innerHTML = sanitizedDurationText;
}

/**
 * 
 * @param {string} detailText 
 */
export function setDescriptionText(descriptionText) {
    const sanitizedDescriptionText = sanitizeHtml(descriptionText);
    document.getElementById('description-text').innerHTML = sanitizedDescriptionText;
}

/**
 * 
 * @param {string} constraintText 
 */
export function setConstraintText(constraintText) {
    const sanitizedConstraintText = sanitizeHtml(constraintText);
    document.getElementById('constraint-text').innerHTML = sanitizedConstraintText;
}