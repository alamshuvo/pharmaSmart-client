import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import UseAuth from '../../hooks/UseAuth';
import UseCart from '../../hooks/UseCart';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableCol: {
    width: "12.5%",
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    textAlign: 'center',
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

const MyDocument = () => {
  const [carts, refetch, totalPrice] = UseCart();
  const { user } = UseAuth();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src="/public/logo.jpg" style={{ width: 100, height: 100 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user?.email}</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {user?.displayName || "Please set Your name"}
          </Text>
        </View>
        <View>
          {carts?.length > 0 ? (
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Invoice</Text>
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>SL</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Image</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Name</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Company</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Price per unit</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Buyer Email</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Seller Email</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Category</Text>
                  </View>
                </View>
                {carts?.map((item, index) => (
                  <View key={item._id} style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{index + 1}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Image style={{ width: 50, height: 50 }} src={item.photo} />
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.name}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.company}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.price}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.buyerEmail}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.sellerEmail}</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>{item.category}</Text>
                    </View>
                  </View>
                ))}
              </View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
                Total Price: {totalPrice}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
                No Carts Data Found Please Shop your Medicine
              </Text>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
