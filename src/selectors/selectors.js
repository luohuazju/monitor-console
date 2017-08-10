/**
 * Created by carl on 8/10/17.
 */

export const authorsFormattedForDropdown = authors => {
    if (!authors) {
        return;
    }

    return authors.map(author => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });
};
