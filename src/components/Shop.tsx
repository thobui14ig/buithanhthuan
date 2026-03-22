import { Button, Card, Col, message, Row, Tabs } from 'antd';
import { useState } from 'react';
import RequestForm from './RequestForm';
import SupportTable from './SupportTable';

const { TabPane } = Tabs;

const HoneyShop = () => {
  const [activeTab, setActiveTab] = useState('sing');

  const products = [
    { id: 1, name: 'Mật ong rừng nguyên chất 500ml', price: 250000, image: '/honey-500ml.jpg' },
    { id: 2, name: 'Mật ong nguyên chất 1L', price: 450000, image: '/honey-1L.jpg' },
    { id: 3, name: 'Mật ong rừng cao cấp 250ml', price: 150000, image: '/honey-250ml.jpg' },
  ];

  const handleBuyNow = (product: any) => {
    message.success(`Bạn đã đặt mua ${product.name} - ${product.price.toLocaleString('vi-VN')} VNĐ!`);
  };

  return (
    <div className="space-y-6">
        <Tabs 
            activeKey={activeTab} 
            onChange={setActiveTab}
            className="mt-4 custom-tabs"
            tabBarStyle={{ 
                marginBottom: 24,
            }}
            >
            <TabPane tab="🎤 Yêu cầu tôi hát" key="sing">
            <RequestForm />
            <SupportTable />
            </TabPane>
            
            <TabPane tab="🛒 Mua hàng ủng hộ tôi" key="shop">
                <Card className="border-0 shadow-xl" size="small">
                    <Row gutter={[24, 24]}>
                    {products.map((product) => (
                        <Col xs={24} sm={12} lg={8} key={product.id}>
                        <Card 
                            hoverable 
                            cover={<img alt={product.name} src={product.image} className="h-48 object-cover rounded-t-lg" />}
                            className="shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <Card.Meta 
                            title={<div className="font-bold text-lg line-clamp-1">{product.name}</div>}
                            description={
                                <div className="space-y-2 mt-2">
                                <div className="text-2xl font-bold text-orange-500">
                                    {product.price.toLocaleString('vi-VN')} VNĐ
                                </div>
                                <Button 
                                    type="primary" 
                                    block 
                                    size="large"
                                    onClick={() => handleBuyNow(product)}
                                    className="mt-3 bg-orange-500 hover:bg-orange-600 font-semibold shadow-md"
                                >
                                    🛒 Mua ngay
                                </Button>
                                </div>
                            }
                            />
                        </Card>
                        </Col>
                    ))}
                    </Row>
                </Card>
            </TabPane>
        </Tabs>
    </div>
  );
};

export default HoneyShop;
