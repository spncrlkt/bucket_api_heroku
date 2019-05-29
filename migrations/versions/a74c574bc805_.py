"""empty message

Revision ID: a74c574bc805
Revises: 9eb639544739
Create Date: 2019-05-28 22:28:24.101208

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a74c574bc805'
down_revision = '9eb639544739'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tags', sa.Column('silo_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'tags', 'silos', ['silo_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'tags', type_='foreignkey')
    op.drop_column('tags', 'silo_id')
    # ### end Alembic commands ###
